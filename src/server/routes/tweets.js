const Twitter = require('twitter');

module.exports = (app, io) => {
    let twitter = new Twitter({
      consumer_key: "MGgDOyO6OI4LJe7j8TxHlRTy3",
      consumer_secret: "tWDsJcPtT9pBUHlSDvUumOmi1utOfttQ22TEDRVe0q0mzbNtaz",
      access_token_key: "1141583537860042752-cha2aHQ3o27XysojQU5H8tWJiW0KTX",
      access_token_secret: "qqVkd7mMgUwLdWiIRiddmvnrumVF64Ido2KraaGxwpeLj"
    });

    let socketConnection;
    let twitterStream;

    app.locals.searchTerm = 'JavaScript'; //Default search term for twitter stream.
    app.locals.showRetweets = false; //Default

    /**
     * Resumes twitter stream.
     */
    const stream = () => {
        console.log('Resuming for ' + app.locals.searchTerm);
        twitter.stream('statuses/filter', { track: app.locals.searchTerm }, (stream) => {
            stream.on('data', (tweet) => {
                sendMessage(tweet);
            });

            stream.on('error', (error) => {
                console.log(error);
            });

            twitterStream = stream;
        });
    }

    /**
     * Sets search term for twitter stream.
     */
    app.post('/setSearchTerm', (req, res) => {
        let term = req.body.term;
        app.locals.searchTerm = term;
        twitterStream.destroy();
        stream();
    });

    /**
     * Pauses the twitter stream.
     */
    app.post('/pause', (req, res) => {
        console.log('Pause');
        twitterStream.destroy();
    });

    /**
     * Resumes the twitter stream.
     */
    app.post('/resume', (req, res) => {
        console.log('Resume');
        stream();
    });

    //Establishes socket connection.
    io.on("connection", socket => {
        socketConnection = socket;
        stream();
        socket.on("connection", () => console.log("Client connected"));
        socket.on("disconnect", () => console.log("Client disconnected"));
    });

    /**
     * Emits data from stream.
     * @param {String} msg 
     */
    const sendMessage = (msg) => {
        if (msg.text.includes('RT')) {
            return;
        }
        socketConnection.emit("tweets", msg);//"tweetsはeventname"
    }
};