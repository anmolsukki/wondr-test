import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/ActionTypes/index';
import HomeMob from "./HomeMob";

class Home extends Component {
    state = {
        images: [],
        imgId: 1,
        totalPage: null,
        scrolling: false,
        visible: 30
    }

    componentDidMount = () => {
        this.loadImages();
        this.updateWindowDimensions();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    handleScroll = (e) => {
        const { scrolling, totalPage, imgId } = this.state;
        if(scrolling) return
        if(totalPage <= imgId) return
        const lastLI = document.querySelector(".w-20:last-child")
        const lastLiOffset = lastLI.offsetTop + lastLI.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        var bottomOffset = 20;
        if(pageOffset > lastLiOffset - bottomOffset) this.loadMore()
    }

    loadImages = () => {
        const { imgId, images } = this.state;
        const url = `https://picsum.photos/v2/list?page=${imgId}`
        fetch(url)
        .then(response => response.json())
        .then(json => this.setState({
            images: [...images ,...json],
            scrolling: false,
            totalPage: 100
        }))
    }

    loadMore = () => {
        if(this.state.images.length > this.state.visible){
            this.setState(prevState => ({
                visible: prevState.visible + 10,
            }))
        }
        else {
            this.setState(prevState => ({
                scrolling: true,
                imgId: prevState.imgId + 1,
                visible: prevState.visible + 10,
            }), this.loadImages)
        }
    }

    render() {
        console.log("fbcvbcvbv", this.props.imageStateData)
        return (
            <div>
                {this.state.width >= 768 ?
                    <div className="row clr-margin">
                        {this.state.images.slice(0, this.state.visible).map((img, index) => {
                            return (
                                <div className="w-20 text-center" key={index} >
                                    <img src={img.download_url} style={{width: "250px", height: "250px"}} className="rounded img-thumbnail img-fluid" alt="" />
                                </div>
                            )
                        })}
                    </div> : <HomeMob />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const ctrImageData = state.CtrImage;
    return {
      imageStateData: ctrImageData,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        ImagesActionData: () => dispatch(actionCreator.ImagesAction()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
