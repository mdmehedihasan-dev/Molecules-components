/* eslint-disable react/prop-types */

const Paragraph = ({description,style}) => {
  return (
    <p className={style}>{description}</p>
  )
}

export default Paragraph