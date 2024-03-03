

function Complex(real, imaginary) {
  this.r = real;       // The real part of the number
  this.x = imaginary;  // The imaginary part of the number
}

Complex.prototype.abs = function() {
  return Math.sqrt(this.r*this.r + this.x*this.x);
}

Complex.prototype.arg = function() {
  return Math.atan2(this.x,this.r);
}

Complex.prototype.sqrt = function() {
  r=Math.sqrt(this.abs());
  t=this.arg()/2;
  return new Complex(r*Math.cos(t),r*Math.sin(t))
}

Complex.prototype.negative = function() {
  return new Complex(-this.r, -this.x);
}

Complex.prototype.log = function() {
  return new Complex(Math.log(this.abs()),this.arg())
}

Complex.add = function (a, b) {
  return new Complex(a.r + b.r, a.x + b.x);
}

Complex.subtract = function (a, b) {
  return new Complex(a.r - b.r, a.x - b.x);
}

Complex.multiply = function(a, b) {
  return new Complex(a.r * b.r - a.x * b.x,a.r * b.x + a.x * b.r);
}

Complex.prototype.conjugate = function(){
  return new Complex(this.r,-this.x);
}

Complex.divide = function(a, b){
  c=b.conjugate();
  d=Math.pow(b.r,2)+Math.pow(b.x,2);
  e=Complex.multiply(a,c);
  return new Complex(e.r/d,e.x/d);
}

Complex.prototype.inverse = function(){
  return new Complex.divide(Complex.one,this);
}

Complex.prototype.toString=function(p){
  if(this.x<0){return (this.r).toPrecision(p)+"-j"+(-this.x).toPrecision(p);}
  else{return (this.r).toPrecision(p)+"+j"+(this.x).toPrecision(p);}
}

Complex.zero = new Complex(0,0);

Complex.one = new Complex(1,0);

Complex.i = new Complex(0,1);
