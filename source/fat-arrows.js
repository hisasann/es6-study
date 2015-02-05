var func = () => {
  console.log(this); // not window
};
func();