/* eslint-disable react/prop-types */

const Image = ({url,altText,style}) => {
  return (
    <img src={url} alt={altText} className={style}  />
  )
}

export default Image