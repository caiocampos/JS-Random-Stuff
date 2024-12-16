class Ball {
   constructor(track, radius, speed, soundFrequency, hue) {
      this.track = track;
      this.radius = radius;
      this.speed = speed;
      this.soundFrequency = soundFrequency;
      this.hue = hue;
      this.offset = 0;
      this.round = 0;
      this.progress = 0;
      this.center = this.track.getPosition(this.offset);
   }

   move() {
      this.offset += this.speed;
      const res = this.track.getPosition(this.offset);
      this.center = { x: res.x, y: res.y };
      this.progress = res.progress;
      if (res.round != this.round) {
         playSound(this.soundFrequency);
         this.round = res.round;
      }
   }

   draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "white";
      const lightness = 100 - 50 * this.progress;
      ctx.fillStyle = `hsl(${this.hue}, 100%, ${lightness}%)`;
      ctx.fill();
      ctx.stroke();
   }
}