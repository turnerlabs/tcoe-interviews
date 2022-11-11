
class dateutility
{

    
    
    


 getMonthAlphabetical(numberValueofMonth)
{
  let monthmap= new Map();
  monthmap.set(0,'January');
  monthmap.set(1,'Februrary');
  monthmap.set(2,'March');
  monthmap.set(3,'April');
  monthmap.set(4,'May');
  monthmap.set(5,'June');
  monthmap.set(6,'July');
  monthmap.set(7,'August');
  monthmap.set(8,'September');
  monthmap.set(9,'October');
  monthmap.set(10,'November');
  monthmap.set(11,'December');

  return(monthmap.get(numberValueofMonth));

}

    


get_todays_Date()
{
    let monthmap= new Map();
    monthmap.set(0,'January');
    monthmap.set(1,'Februrary');
    monthmap.set(2,'March');
    monthmap.set(3,'April');
    monthmap.set(4,'May');
    monthmap.set(5,'June');
    monthmap.set(6,'July');
    monthmap.set(7,'August');
    monthmap.set(8,'September');
    monthmap.set(9,'October');
    monthmap.set(10,'November');
    monthmap.set(11,'December');
  
  const currentDate= new Date();
  return (currentDate.getDate() +"-"+ monthmap.get(currentDate.getMonth())+"-"+currentDate.getFullYear());
}

  

get_next_date()
{

    let monthmap= new Map();
    monthmap.set(0,'January');
    monthmap.set(1,'Februrary');
    monthmap.set(2,'March');
    monthmap.set(3,'April');
    monthmap.set(4,'May');
    monthmap.set(5,'June');
    monthmap.set(6,'July');
    monthmap.set(7,'August');
    monthmap.set(8,'September');
    monthmap.set(9,'October');
    monthmap.set(10,'November');
    monthmap.set(11,'December');
   


  const currentDate= new Date();
  let nextDate= new Date(currentDate);
  nextDate.setDate(currentDate.getDate()+1);
  return(nextDate.getDate() +"-"+monthmap.get(nextDate.getMonth())+"-"+nextDate.getFullYear());

}


}

module.exports= new dateutility()

