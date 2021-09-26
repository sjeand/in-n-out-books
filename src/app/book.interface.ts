/*
==========================================
Title: in-n-out book
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 09/26/2021
  Description: final deployment
==========================================
*/

//export IBook
export interface IBook
 {
   isbn: string;
   title: string;
   description: string;
   numOfPages: number;
   authors: Array<string>;
 }
