class studentProgrammer{
  constructor(name) {
    this.name = name;
  }

  codding() {
    console.log(`My name is ${this.name} and I can writing simple code`);
  }
}

class juniorProgrammer extends studentProgrammer{
  static skillsPreview(data){
    return data.map(skill => console.log(`I have experience with: ${skill}`))
  }

  constructor(name, skills) {
    super(name);
    this.skills = skills
  }

  codding() {
    super.codding();
    console.log('Also, junior code is better than student!!!')
  }
}

class middleProgrammer extends juniorProgrammer {
  constructor(name, skills, frameWorks) {
    super(name, skills);

    this._frameWorks = frameWorks;
  }

  get frameWorks() {
    return this._frameWorks;
  }

  set frameWorks(newFrameWork) {
    if(this._frameWorks.includes(newFrameWork)) return;

    this._frameWorks = [...this._frameWorks, newFrameWork]
  }

  codding() {
    console.log(`My name is ${this.name} and I can perform difficult tasks!`)
  }
}

class seniorProgrammer extends middleProgrammer {
  constructor(name, skills, frameWorks, softSkills) {
    super(name, skills, frameWorks);

    this.softSkills = softSkills;
  }

  useSoftSkills() {
    this.softSkills.map(skill => console.log(`I have ${skill} soft skills`))
  }
}

const student = new studentProgrammer('Pavlo');
console.group('Student');
console.log(student);
student.codding();
console.groupEnd();

const junior = new juniorProgrammer('John', ['css', 'html', 'js']);
console.group('Junior');
console.log(junior);
junior.codding();
juniorProgrammer.skillsPreview(junior.skills);
console.groupEnd();

const middle = new middleProgrammer(
  'Jack',
  ['css', 'html', 'js', 'git'],
  ['react']
);

console.group('Middle');
console.log(middle);
middle.frameWorks = 'Vue js';
middle.frameWorks = 'Angular2+';
middle.frameWorks = 'Svelte';
console.log(middle.frameWorks);
console.groupEnd();

const senior = new seniorProgrammer(
  'Patrick',
  ['css', 'html', 'js', 'git', 'c#'],
  ['react', 'angular2+'],
  ['coaching', 'mentoring']
);
console.group('Senior');
console.log(senior);
senior.useSoftSkills();
console.groupEnd();


console.group('PROTO');
console.log('seniorProgrammer.prototype.__proto__ === middleProgrammer.prototype',
  seniorProgrammer.prototype.__proto__ === middleProgrammer.prototype);
console.log('seniorProgrammer.__proto__ === middleProgrammer',
  seniorProgrammer.__proto__ === middleProgrammer);
console.groupEnd();







// class User {
//   constructor(name) {
//     this._name = name;
//   }
//
//   get name() {
//     return this._name;
//   }
//
//   getName() {
//     return this._name;
//   }
//
//   set name(newName) {
//     this._name = newName
//   }
//
//   setName(newName) {
//     this._name = newName
//   }
// }
//
// const user = new User('Petr');
// console.log(user.name);
// console.log(user.getName());
// user.name = 'Dima';
// console.log(user.name);
// user.setName('Max');
// console.log(user.getName());

