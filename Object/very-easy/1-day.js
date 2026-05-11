// 1. Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

function getVoteCount(obj) {
    let upvotes = Object.values(obj)[0];
    let downvotes = Object.values(obj)[1];
    return upvotes - downvotes;
}

// Examples
console.log(getVoteCount({ upvotes: 13, downvotes: 0 })) // ➞ 13
console.log(getVoteCount({ upvotes: 2, downvotes: 33 })) // ➞ -31
console.log(getVoteCount({ upvotes: 132, downvotes: 132 })) // ➞ 0
