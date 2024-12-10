class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  getAge(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
}
 revise(newYear){
    this.year = newYear;
    this.revised = true;
 }
 static topBookStore(){
    return "Barnes & Noble"
 }
}

const book1 = new Book("Book 1", "John", "2022");
console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
book1.revise("2024")
console.log(book1);

console.log(Book.topBookStore())

