import './module';
import './scss/index.scss'

class Test {
  constructor(name) {
    this.name = name;
    console.log(this.name);
  }
}

new Test('Test');
