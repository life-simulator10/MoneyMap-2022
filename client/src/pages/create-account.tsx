import {useState} from 'react';
import { FieldValues,useForm } from '@pankod/refine-react-hook-form';
import { useGetIdentity } from "@pankod/refine-core"
import { useNavigate } from '@pankod/refine-react-router-v6';

import Form from 'components/common/Form';
const CreateAccount = () => {
  const { data:user } = useGetIdentity();
    const navigate = useNavigate();
    const { refineCore: {onFinish, formLoading}, register,handleSubmit}= useForm();
    
    const onFinishHandler = async (data:FieldValues)=>{
      await onFinish({...data, email: user.email })
    };
  return (
    <Form type='Create' register={register} onFinish={onFinish} formLoading={formLoading} handleSubmit={handleSubmit} onFinishHandler={onFinishHandler}/>
  )
}

export default CreateAccount