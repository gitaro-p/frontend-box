export class Person {
  constructor(public name: string, public age: number) {}

  public greeting(this: Person) {
    document.write(`私の名前は${this.name}です。 年齢は${this.age}歳です。`)
  }
}

/*$npm run lint

4:3  warning  Missing return type on function
(訳:greetingメソッドの返り値に型が指定されていない)

//以下のように返り値を指定して実行するとエラーは消える
/*export class Person {
  constructor(public name: string, public age: number) {}

  public greeting(this: Person): void {
    document.write(`私の名前は${this.name}です。 年齢は${this.age}歳です。`);
  }
}*/
