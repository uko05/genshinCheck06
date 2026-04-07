// checkSheetVotes.js
import { db } from './firebaseConfig.js';
import {
  doc,
  setDoc,
  increment,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// checkSheetVotes/{questionId} = { "ナヴィア.png": 42, "フリーナ.png": 15, ... }
async function incrementVote(questionId, characterFile) {
  const ref = doc(db, "checkSheetVotes", questionId);
  await setDoc(ref, {
    [characterFile]: increment(1),
    updatedAt: serverTimestamp()
  }, { merge: true });
}

// tabSelections = { "TAB-03": ["ナヴィア.png"], "TAB-06": ["フリーナ.png"], ... }
export async function submitVotes(tabSelections) {
  const promises = Object.entries(tabSelections)
    .filter(([, selected]) => selected.length > 0)
    .map(([questionId, selected]) => incrementVote(questionId, selected[0]));

  const results = await Promise.allSettled(promises);
  results.forEach(r => {
    if (r.status === 'rejected') console.error("集計の書き込みに失敗", r.reason);
  });
}
