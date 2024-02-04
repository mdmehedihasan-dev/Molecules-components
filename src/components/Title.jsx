/* eslint-disable react/prop-types */

const Title = ({text}) => {
  return (
    <div>
        
          { text ?
              <h2 className="font-semibold text-xl text-green-300  px-2">
              {text} </h2>
              :
              <h2>No title : please add a title</h2>
          }
         
        
    </div>
  )
}

export default Title