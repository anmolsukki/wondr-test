import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/ActionTypes/index';

class Home extends Component {
    state = {
        page: 1,
        visible: 20
    }

    componentDidMount = () => {
        this.loadImages();
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        const lastLI = document.querySelector(".w-20:last-child")
        const lastLiOffset = lastLI.offsetTop + lastLI.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        var bottomOffset = 20;
        if(pageOffset > lastLiOffset - bottomOffset) this.loadMore()
    }

    loadImages = () => {
        const { page } = this.state;
        this.props.imagesActionData(page)
    }

    loadMore = () => {
        if(this.props.imageStateData.reImageData.length > this.state.visible){
            this.setState(prevState => ({
                visible: prevState.visible + 8,
            }))
        }
        else {
            this.setState(prevState => ({
                page: prevState.page + 1,
                visible: prevState.visible + 8,
            }), this.loadImages)
        }
    }

    render() {
        return (
            <div>
                <div className="row clr-margin">
                    {this.props.imageStateData.reImageData.slice(0, this.state.visible).map((img, index) => {
                        return (
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 w-20" key={index}>
                                <div className="text-center">
                                    <img src={img.download_url} style={{width: "100%" ,height: "250px"}} className="rounded img-thumbnail img-fluid" alt="" />
                                    <div className="author">{img.author}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
