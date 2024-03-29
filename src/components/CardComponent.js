import React from 'react';

class CardComponent extends React.Component {
    render() {
        let data = this.props.data;
        console.log(data);
        return (
                <div className="twitter_card_main">
                    <div className="left-wrapper">
                        <div className="profile_image_box">
                            <img src={data.user.profile_image_url} alt={data.user.name} className="profile_image_circle" />
                        </div>  
                    </div>
                    <div className="right-wapper">
                        <div className="tweet_user_box">
                            <div className="user_name_box">
                                <a href={`https://twitter.com/${data.user.name}`} target="#">{`${data.user.name}`} </a>
                            </div>
                            <div className="user_screen_name_box">
                                <a href={`https://twitter.com/${data.user.screen_name}`} target="#">{`@${data.user.screen_name}`}</a>
                            </div>
                        </div>
                        <div className="tweet_main_text">
                            <span className="black-text">{data.text}</span>                            
                        </div>
                        <div className="icon_container">
                            <div className="iconbox_long">
                                <svg viewBox="0 0 24 24" className="icon"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                                <div className="icon_count">{data.reply_count}</div>
                            </div>
                            <div className="iconbox_long">
                                <svg viewBox="0 0 24 24" className="icon"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
                                <div className="icon_count">{data.retweet_count}</div>
                            </div>
                            <div className="iconbox_long">
                                <svg viewBox="0 0 24 24" className="icon"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path></g></svg>
                                <div className="icon_count">{data.favorite_count}</div>
                            </div>
                            <div className="iconbox_short">
                            <svg viewBox="0 0 24 24" className="icon"><g><path d="M18.466 14.928c-1.118 0-2.106.525-2.765 1.328l-6.587-3.358c.066-.27.11-.55.11-.842 0-.287-.042-.562-.106-.83l6.575-3.32c.658.81 1.65 1.34 2.774 1.34 1.978 0 3.586-1.606 3.586-3.58s-1.608-3.58-3.586-3.58-3.586 1.606-3.586 3.58c0 .314.054.614.13.904L8.463 9.876c-.656-.846-1.672-1.4-2.824-1.4-1.98 0-3.588 1.606-3.588 3.58s1.61 3.58 3.587 3.58c1.146 0 2.158-.55 2.815-1.39l6.56 3.343c-.08.294-.135.598-.135.918 0 1.974 1.608 3.58 3.586 3.58s3.586-1.606 3.586-3.58-1.61-3.58-3.586-3.58zm0-11.34c1.15 0 2.086.932 2.086 2.078s-.936 2.08-2.086 2.08-2.086-.934-2.086-2.08.935-2.08 2.086-2.08zM5.64 14.134c-1.15 0-2.088-.933-2.088-2.08s.937-2.08 2.087-2.08 2.085.935 2.085 2.08-.936 2.08-2.086 2.08zm12.826 6.452c-1.15 0-2.086-.933-2.086-2.08s.936-2.08 2.086-2.08 2.086.935 2.086 2.08-.936 2.08-2.086 2.08z"></path></g></svg>
                                
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default CardComponent;
console.log(CardComponent);