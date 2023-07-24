import {useState} from 'react';
import { useForm } from '@pankod/refine-react-hook-form';
import { FieldValues } from "react-hook-form";
import { useGetIdentity } from "@pankod/refine-core"

import { useNavigate } from '@pankod/refine-react-router-v6';

import PostForm from 'components/common/PostForm';
const CreatePost = () => {
    const navigate = useNavigate();
    const { data:user } = useGetIdentity();
    const [postImage, setPostImage] = useState({name:"", url:""});
    

    const { refineCore: {onFinish, formLoading}, register,handleSubmit}= useForm();
    
    const handleImageChange = (file: File) => {
        const reader = (readFile: File) =>
            new Promise<string>((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.onload = () => resolve(fileReader.result as string);
                fileReader.readAsDataURL(readFile);
            });

        reader(file).then((result: string) =>
            {setPostImage({ name: file?.name, url: result })}
        );
        
    };

    const onFinishHandler = async (data: FieldValues) => {
        if (!postImage.name) return alert("Please select an image");

        await onFinish({
            ...data,
            photo: postImage.url,
            email: user.email
        });
    };
  return (
    <PostForm type='Create' register={register} onFinish={onFinish} formLoading={formLoading} handleSubmit={handleSubmit} handleImageChange={handleImageChange} onFinishHandler={onFinishHandler} postImage={postImage}/>
  )
}

export default CreatePost