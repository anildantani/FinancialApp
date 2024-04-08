import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPZMMu86yXiApF5l68sjvBQmwOpYjBGrQ",
    authDomain: "financialapp-f2fb5.firebaseapp.com",
    projectId: "financialapp-f2fb5",
    storageBucket: "financialapp-f2fb5.appspot.com",
    messagingSenderId: "142558139846",
    appId: "1:142558139846:web:64d1520bbfe8855def4ec7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const fetchTransactions = async () => {
    try {
      const transactionsCollection = collection(firestore, 'transactions');
      const querySnapshot = await getDocs(transactionsCollection);
  
      const transactionsList = [];
      querySnapshot.forEach((doc) => {
        transactionsList.push({ id: doc.id, ...doc.data() });
      });
  
      console.log('Fetched transactions:', transactionsList);
      return transactionsList;
    } catch (error) {
      console.error('Error fetching transactions:', error);
      return [];
    }
  };  

  const fetchTransactiondetails = async (transactionId) => {
    try {
      const transactionRef = doc(firestore, "transactions", transactionId);
      const docSnap = await getDoc(transactionRef);
  
      if (docSnap.exists()) {
        const transactionData = docSnap.data();
        return transactionData;
      } else {
        console.log("Transaction not found!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching transaction:", error);
      return null;
    }
  };

export { fetchTransactions, fetchTransactiondetails, firestore };
