

const List = ({person}) => {
return(
  <>
  {person.map((people)=>{
    const {id,name,image,age}=people
    return(
      <div  class="listdetails"> 
     <article key={id}>
      <img src={image} alt="photo"/>
     </article>
     <div class="details">
      <h4>{name}</h4>
      <p>{age} years</p>
     </div>
     </div>
    )
  })}
  </>
) 
};

export default List;
