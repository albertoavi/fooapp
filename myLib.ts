// Defining a reusable function
function padTo2Digits(num: number): String {
    return num.toString().padStart(2, '0');
  }
  
// format as "DD-MM-YYYY"
export function cDate(): String {
       const date: Date = new Date();
    return ( 
      [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear()
      ].join(":"));
  }

  // format as "hh:mm:ss"
export function cTime(): String {
  const date: Date = new Date();
return ( 
 [
   padTo2Digits(date.getHours()),
   padTo2Digits(date.getMinutes()),
   padTo2Digits(date.getSeconds()),
 ].join(':')
);
}

  // format as "DD-MM-YYYY hh:mm:ss"
  export function cDT(): String {
    const date: Date = new Date();
  return ( 
    cDate() +
    ' ' +
    cTime()
  );
  }
  
  
  