import React, { Component } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }



    constructor() {
        super();
        this.state = {
            loading: false,
            articles: [],
            totalResults: 0,
            page: 1
        }
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        // console.log(this.props.category)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}`;
        this.setState({ loading: true });
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    render() {
        return (
            <div className='container my-3'>
                <h1>Top News</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<h4>Loading...</h4>}
                >
                    <div className='container'>
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return <div className='col-md-4' key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} desc={element.body ? element.body.slice(0, 88) : ""} urlImage={element.urlToImage} NewsUrl={element.url} auth={element.author} date={element.publishedAt}/>
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
                <div >

                </div>
            </div>
        )
    }
}

export default News
