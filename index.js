#!/usr/bin/env node
var prompt = require('prompt');
var board = {
	1: ' ',
	2: ' ',
	3: ' ',
	4: ' ',
	5: ' ',
	6: ' ',
	7: ' ',
	8: ' ',
	9: ' '
}

function markBoard(position, mark){
	board[position] = mark.toUppercase();
}

function printBoard(){
	console.log('\n' + 
		' ' + board[1] + '|' + board[2] + '|' + board[3] + '\n' +
		' ' + board[4] + '|' + board[5] + '|' + board[6] + '\n' + 
		' ' + board[7] + '|' + board[8] + '|' + board[9] + '\n'
		 )
}

function isInt(num){
	if(typeof num !== 'number'){
		return false;
	}else{
		return true;
	}

function validateMove(position){
	return (board[position] && isInt(position));
	}

var winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7] ]

function checkWin(){
	
}

}
