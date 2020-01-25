import React from "react";
import "./HomePage.scss";
import { Row, Col, Card, Avatar } from "antd";
import { IVideo } from "../../models";
import moment from "moment";
import { RouteComponentProps } from "react-router-dom";
import { IGetVideosResponse } from "../../models/http";
import HTTPService from "../../utils/HTTPService";
import { SERVER_URL } from "../../config/config";

interface IHomePageProps
{
    isAuth: boolean;
}

interface IHomePageState
{
    videos: IVideo[];
    isLoading: boolean;
}

class HomePage extends React.Component<IHomePageProps & RouteComponentProps, IHomePageState>
{
    public constructor(props: IHomePageProps & RouteComponentProps)
    {
        super(props);
    
        this.state =
        {
            videos: [],
            isLoading: true
        };
    }

    public componentDidMount(): void
    {
        this.getVideos();
    }

    public render(): JSX.Element
    {
        return (
            <div className="home-page-container">
                <h2>Recommended</h2>

                <hr/>

                <Row gutter={[32, 16]} className="video-list">
                    {this.state.isLoading 
                        ? <div>Loading...</div>
                        : this.renderVideos()}
                </Row>
            </div>
        )
    }

    private renderVideos(): JSX.Element
    {
        const { videos } = this.state;

        return (
            <>
            {videos.map((video, index) => 
            {
                return (
                    <Col key={index} lg={6} md={8} xs={24} span={6}>
                        <Card className="card-item" 
                            hoverable
                            cover={<img src={`http://localhost:5000/${video.thumbnail}`} alt="thumbnail" />}
                            >
                            <Card.Meta title={video.title} 
                                avatar={<Avatar src={video.writer.image} />}
                                description={video.writer.name} />
                            <p className="time">{moment(video.createdAt).format('LL')}</p>
                        </Card>
                    </Col>
                )
            })}
            </>
        )
    }

    private async getVideos(): Promise<void>
    {
        try
        {
            let response: IGetVideosResponse = await HTTPService.get(`${SERVER_URL}/api/video/getVideos`);

            if (!response.success)
                alert("비디오 가져오기를 실패하였습니다.");

            this.setState({
                videos: response.videos,
                isLoading: false
            });
        }
        catch (error)
        {
            console.log(error);
            alert("비디오 가져오기를 실패하였습니다.");
        }
    }
}

export default HomePage;