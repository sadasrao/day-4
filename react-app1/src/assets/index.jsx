
    import sadas from 'SADAS A.jpg'; // Import the image from the assets folder
const MyImages = {

sadas
}
//export default MyImages;

const Button = ({name,onClick}) => {
  return (      
    <button onClick={onClick} className="my-button">          
      {name}
    </button>
  );
};

export default Button;
