/* Notes:
   * Subtract the Future Date and Today Date to get Time DIfference in Values
   * Use Time Difference with the Millisecond values

   

*/


class Countdown{
 constructor({futureTime, btnCelebrate, btnStop}){
  /* Arguments */
  this.futureTime = futureTime;
  
  /* Defaults */
  this.countdownInterval;
  this.btnCelebrate = btnCelebrate;
  this.btnStop = btnStop;
   this.sound =  new Howl({
      src: ['../audio/happy-bday.mp3']
   });

  /* Values in ms */
  /* Value of how many milliseconds in one day */
   this.ONE_DAY_MILLI = 24 * 60 * 60 * 1000;
   this.ONE_HOUR_MILLI = 60 * 60 * 1000;
   this.ONE_MIN_MILLI = 60 * 1000;
  
  /* Auto Run */
  this.startCountdown();
  this.playSong();
  this.stopSong();
 }

 getRemainingTime(){
  const today = new Date().getTime();
  const timeDiff = this.futureTime - today;

  /* Day value that is left over */
  let days = timeDiff / this.ONE_DAY_MILLI;
  days = Math.floor(days);


  /* Gets the Modulo value that is left over from Time Difference by oneDay in ms
     Divided by the 1 hr in milliseconds
  */
  let hours = Math.floor((timeDiff %  this.ONE_DAY_MILLI) / this.ONE_HOUR_MILLI);
  let minutes = Math.floor((timeDiff % this.ONE_HOUR_MILLI) / this.ONE_MIN_MILLI);
  let seconds = Math.floor((timeDiff % this.ONE_MIN_MILLI) / 1000);
  
  //set values array;
  const values = [days, hours, minutes, seconds];
  
  this.displayTime(values);
  
  if(timeDiff < 0 ){
   clearInterval(this.countdownInterval);
   deadline.innerHTML = ``;
   const pageTitle = document.querySelector('#pageTitle');

   pageTitle.innerHTML = `Birthday Poem <br> for Regie`;
   document.querySelector('.deadline-meta').classList.add('meta--hide');
   document.querySelector('.date-poem').classList.remove('meta--hide');
   document.querySelector('.cake').classList.remove('meta--hide');
   document.querySelector('.announcement').classList.add('meta--hide');
   

  }
 }

 /* Displays in front end */
 displayTime(values){
  items.forEach((item, index) => {

   /* If Index is 0 which is the days */
   if(index == 0) 
      return item.innerHTML = values[index];

   /* Else it will do this instead and formay by two digits only */
   item.innerHTML = this.format(values[index]);
  });

 }

 format(item){
  return (`0${item}`).slice(-2);
 }

 /* Gives an interval of 1 second on getRemainingTime method */
 startCountdown(){
  this.countdownInterval = setInterval(this.getRemainingTime.bind(this), 1000);
 }

 playSong(){
   this.btnCelebrate.addEventListener('click', (e)=> {
     e.preventDefault();
   
      this.sound.play();
      this.btnCelebrate.classList.add('meta--hide');
      this.btnStop.classList.remove('meta--hide');

      this.sound.on('end', function () {
         this.btnCelebrate.classList.remove('meta--hide');
         this.btnStop.classList.add('meta--hide');
      });

   });
 }

 stopSong(){
   this.btnStop.addEventListener('click', (e)=> {
     e.preventDefault();

      this.sound.stop();
      this.btnCelebrate.classList.remove('meta--hide');
      this.btnStop.classList.add('meta--hide');

   });
 }

}

const countdown = new Countdown({
 futureTime: futureDate.getTime(),
 btnCelebrate: document.querySelector('#btnCelebrate'),
 btnStop: document.querySelector('#btnStop')
});

