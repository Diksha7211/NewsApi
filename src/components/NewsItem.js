import React, { Component } from 'react'

export class NewsItem extends Component {
    render(props) {
        let { title, desc, urlImage, NewsUrl, auth,date} = this.props;
        return (
            <div>
                <div className="card my-3" >
                    <img src={!urlImage ? 'https://www.indiantelevision.com/sites/default/files/images/tv-images/2020/12/01/news.jpg' : urlImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"><small className="text-muted">By {!auth ? "Unknown" : auth}<br/> on <br/> {new Date(date).toGMTString()}</small></p>
                        <p className="card-text">{auth}</p>
                        <p className="card-text">{desc}</p>
                        
                        <a href={NewsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
