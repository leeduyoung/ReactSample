import React from "react";
import "./VideoUploadPage.scss";
import * as Antd from "antd";
import Dropzone from "react-dropzone";
import { RouteComponentProps } from "react-router-dom";
import HTTPService from "../../utils/HTTPService";
import { SERVER_URL } from "../../config/config";
import { IVideoUploadFilesResponse, IVideoThumbnailResponse, IVideoThumbnailRequest, IUploadVideoResponse, IUploadVideoRequest } from "../../models/http";
import { userInfo } from "os";
import { connect } from "react-redux";
import { IRootReducerState } from "../../store/reducers";
import { IUserState } from "../../store/reducers/user";

const PrivateOptions = 
[
    {value: 0, label: "Private"},
    {value: 1, label: "Public"},
];
const CategoryOptions = 
[
    {value: 0, label: "Film & Animation"},
    {value: 1, label: "Autos & Vehicles"},
    {value: 2, label: "Music"},
    {value: 3, label: "Pets & Animals"},
];

interface IVideoUploadPageProps
{
    user: IUserState;
}

interface IVideoUploadPageState
{
    title: string;
    description: string;
    privacy: number;
    category: number;
    thumbnailPath: string;
    filePath: string;
    duration: number;
}

class VideoUploadPage extends React.Component<IVideoUploadPageProps & RouteComponentProps, IVideoUploadPageState>
{
    public constructor(props: IVideoUploadPageProps & RouteComponentProps)
    {
        super(props);

        this.state =
        {
            title: "",
            description: "",
            privacy: 0,
            category: 0,
            thumbnailPath: "",
            filePath: "",
            duration: 0
        };
    }

    public render(): JSX.Element
    {
        return (
            <div className="video-upload-page-container">
                <div className="title">
                    <Antd.Typography.Title level={2}>Upload Video</Antd.Typography.Title>
                </div>

                <form onSubmit={this.onSubmitHandler.bind(this)}>

                    <div className="drop-zone-container">
                        <Dropzone onDrop={this.onDrop.bind(this)} multiple={false} maxSize={100000000}>
                        {
                            (({getRootProps, getInputProps}) => {
                                return (
                                    <div className="drop-zone" {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <Antd.Icon type="plus" style={{fontSize: '3rem'}} />
                                    </div>
                                )
                            })
                        }
                        </Dropzone>

                        {this.state.thumbnailPath && (
                            <div>
                                <img src={`http://localhost:5000/${this.state.thumbnailPath}`} alt="thumbnail" />
                            </div>
                        )}
                    </div>

                    <label>
                        <p>Title</p>
                        <input type="text" 
                            value={this.state.title}
                            onChange={this.onTitleChangeHandler.bind(this)} />
                    </label>

                    <label>
                        <p>Description</p>
                        <textarea cols={30} rows={7} 
                            value={this.state.description}
                            onChange={this.onDescriptionChangeHandler.bind(this)}></textarea>
                    </label>

                    <label>
                        <select onChange={this.onPrivateOptionChange.bind(this)}>
                            {PrivateOptions.map((item, index) => 
                            {
                                return <option key={index} value={item.value}>{item.label}</option>;
                            })}
                        </select>
                    </label>

                    <label>
                        <select onChange={this.onCategoryChange.bind(this)}>
                            {CategoryOptions.map((item, index) =>
                            {
                                return <option key={index} value={item.value}>{item.label}</option>;
                            })}
                        </select>
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

    private onTitleChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void
    {
        this.setState({
            title: event.target.value
        });        
    }
    private onDescriptionChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>): void
    {
        this.setState({
            description: event.target.value
        });
    }
    private onPrivateOptionChange(event: React.ChangeEvent<HTMLSelectElement>): void
    {
        this.setState({
            privacy: parseInt(event.target.value)
        });
    }
    private onCategoryChange(event: React.ChangeEvent<HTMLSelectElement>): void
    {
        this.setState({
            category: parseInt(event.target.value)
        });
    }
    private async onSubmitHandler(event: React.FormEvent<HTMLFormElement>): Promise<void>
    {
        event.preventDefault();

        const {title, category, duration, thumbnailPath, filePath, description, privacy} = this.state;
        const {user} = this.props;

        const input: IUploadVideoRequest =
        {
            writer: user.id,
            title: title,
            description: description,
            privacy: privacy,
            category: category,
            filePath: filePath,
            duration: duration,
            thumbnail: thumbnailPath
        };

        try
        {
            let response: IUploadVideoResponse = await HTTPService.post(`${SERVER_URL}/api/video/uploadVideo`, input);

            if (response.success)
            {
                Antd.message.success("성공적으로 업로드 되었습니다.");

                this.props.history.push('/');
            }
            else
                alert("비디오 업로드에 실패하였습니다.");
        }
        catch(error)
        {
            console.log(error);
            alert("비디오 업로드에 실패하였습니다.");
        }
    }

    private async onDrop(files: File[]): Promise<void>
    {
        try
        {
            // UPLOAD VIDEO
            let response: IVideoUploadFilesResponse = await this.uploadVideo(files);
            
            if (!response.success)
                throw new Error(response.error.message);

            this.setState({
                filePath: response.url
            });

            // MAKE THUMBNAIL
            let request: IVideoThumbnailRequest =
            {
                fileName: response.fileName,
                url: response.url
            };
            let res: IVideoThumbnailResponse = await this.makeThumbnail(request);

            if (!res.success)
                throw new Error(res.error.message);

            this.setState({
                duration: parseInt(res.fileDuration),
                thumbnailPath: res.url
            });
        }
        catch (error)
        {
            console.log(error);
        }
    }

    private async uploadVideo(files: File[]): Promise<IVideoUploadFilesResponse>
    {
        let formData = new FormData();
        let header = {'content-type': 'multipart/form-data'};
        formData.append("file", files[0]);

        return await HTTPService.post(`${SERVER_URL}/api/video/uploadfiles`, formData, header);
    }
    private async makeThumbnail(data: IVideoThumbnailRequest): Promise<IVideoThumbnailResponse>
    {
        return await HTTPService.post(`${SERVER_URL}/api/video/thumbnail`, data);
    }
}

const mapStateToProps = (state: IRootReducerState) =>
{
    return {
        user: state.userReducer
    };
};

export default connect(mapStateToProps, null)(VideoUploadPage);