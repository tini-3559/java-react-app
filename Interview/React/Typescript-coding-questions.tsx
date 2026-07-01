
//  1. Get frequency count of letters in String


export default function App() {
  function getFrequencyCount(str: string) {
    const freq: Record<string, number> = {};
    for (const char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
  }
  console.log(getFrequencyCount('typescript'));

}

// 2. Create a generic function to reverse an array of any type.
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

// 3. Create an interface for a Book with properties title, author, and year. Implement a function to display book details.
interface Book {
  title: string;
  author: string;
  year: number;
}

function displayBookDetails(book: Book) {
  console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
}

// 4. Write a function to remove all duplicates from an array of numbers.

function removeDuplicate(arr: number[]): number[] {
  return [...new Set(arr)];
}
console.log(removeDuplicate([1, 2, 5, 2, 1, 3, 4]));