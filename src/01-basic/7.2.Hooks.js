import * as React from "react";

const FakeComponent = () => {
  React.useEffect(() => {
    console.log('mount');

    return () => {
      console.log('Hello from unmount');
    };
  }, []);

  return <section>Just ignore me</section>;
};

export const CommentCollapsible = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleComment = React.useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  React.useEffect(() => {
    console.log('isOpen: ', isOpen);
  }, [isOpen]);

  const content = React.useMemo(() => <>
    <p>Component is {!isOpen && 'not'} visible</p>
    {isOpen && <FakeComponent/>}
  </>, [isOpen]);

  return <div>
    <input type="button" onClick={toggleComment} value="toggle"/>
    {content}
  </div>;
};