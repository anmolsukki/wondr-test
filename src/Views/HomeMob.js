import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/ActionTypes/index';
import Home from "./Home";

class HomeMob extends Component {
    state = {
        page: 1,
        scrolling: false,
        visible: 12
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
        this.setState({ width: window.innerWidth });
    }

    handleScroll = (e) => {
        const { scrolling } = this.state;
        if(scrolling) return
        const lastLI = document.querySelector(".w-20:last-child")
        const lastLiOffset = lastLI.offsetTop + lastLI.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        var bottomOffset = 20;
        if(pageOffset > lastLiOffset - bottomOffset) this.loadMore()
    }

    loadImages = () => {
        const { page } = this.state;
        this.props.imagesActionData(page)
        this.setState({
            scrolling: false
        })
    }

    loadMore = () => {
        if(this.props.imageStateData.reImageData.length > this.state.visible){
            this.setState(prevState => ({
                visible: prevState.visible + 4,
            }))
        }
        else {
            this.setState(prevState => ({
                scrolling: true,
                page: prevState.page + 1,
                visible: prevState.visible + 4,
            }), this.loadImages)
        }
    }

    render() {
        return (
            <div>
                {this.state.width >= 768 ?
                    <Home /> :
                    <div className="row clr-margin">
                        {this.props.imageStateData.reImageData.slice(0, this.state.visible).map((img, index) => {
                            return (
                                <div className="w-20 text-center" key={index} >
                                    <img src={img.download_url} style={{width: "100%", height: "250px"}} className="rounded img-thumbnail img-fluid" alt="" />
                                    <div className="author">{img.author}</div>
                                </div>
                            )
                        })}
                    </div>
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
        imagesActionData: (page) => dispatch(actionCreator.ImagesAction(page)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomeMob);
