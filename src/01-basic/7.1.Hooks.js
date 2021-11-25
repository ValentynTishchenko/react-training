import * as React from "react";

export const FormInput = ({onChange, value, name}) => {
  return <p>
    <input onChange={onChange} name={name} value={value}/>
  </p>;
};

export const ControlledForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    password: '',
  });


  const onChange = React.useCallback((e) => {
    const {name, value} = e.target;

    setFormData((data) => ({...data, [name]: value}));
  }, []);

  const onSubmit = React.useCallback((e) => {
    e.preventDefault();
  }, []);


  return <form onSubmit={onSubmit}>
    <FormInput value={formData.name} name="name" onChange={onChange}/>
    <FormInput value={formData.password} name="password" onChange={onChange}/>
    <input type="submit" value="submit"/>
  </form>;
};

export const UncontrolledForm = () => {
  const formData = React.useRef({
    name: '',
    password: '',
  });

  const pRef = React.useRef();

  const onChange = React.useCallback((e) => {
    const {name, value} = e.target;

    formData.current[name] = value;
  }, []);

  const onSubmit = React.useCallback((e) => {
    e.preventDefault();
  }, []);

  return <form onSubmit={onSubmit}>
    <FormInput value={formData.current.name} name="name" onChange={onChange}/>
    <FormInput value={formData.current.password} name="password" onChange={onChange}/>
    <input type="submit" value="submit"/>
  </form>;
};

