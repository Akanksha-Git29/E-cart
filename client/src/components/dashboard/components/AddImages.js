import React, { Component } from 'react'
import { getServer } from '../../../util'
import axios from 'axios'
import UploadImages from '../../general/UploadImages'
import { Button, notification } from "antd";


export default class AddImages extends Component {
    state = {
        fileList: [],
    };
    uploadFile = (e) => {
        const data = new FormData()
        const url = `${getServer()}/api/products/upload/thumbnail`
        const target = e.target.files[0]
        console.log(e.target.files[0])
        data.append("file", target)
        axios({
            method: "post",
            url,
            data,
            config: { headers: { "Content-Type": "multipart/form-data" } }
        }).then((res) => {
            console.log("success")
            if (res.status === 200) {
                notification.info({
                    message: `Image Upload`,
                    description: res.data.msg,
                    placement: "topRight",
                });
                this.setState({ fileList: [] });
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    uploadImages = async (id) => {
        const { fileList } = this.state;
        const request = fileList.map((file) => this.uploadImage({ id, file }));
        await Promise.all(request);
    };

    render() {
        return (
            <div>
                <p className='lead'>Update your product thumbnail</p>
                <input type="file" name="file" onChange={this.uploadFile} />
                <UploadImages
                    fileList={this.state.fileList}
                    handleChange={this.handleChange}
                />
                <Button
                    type="primary"
                    // onClick={() => this.uploadImages(this.props.match.params.id)}
                >
                    Submit Images
                </Button>
            </div>
        )
    }
}
