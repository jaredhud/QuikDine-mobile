import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import * as MailComposer from "expo-mail-composer";
import * as Print from "expo-print";
import { colors, FontFamily } from "../../../GlobalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";
import email from 'react-native-email';
import AppContext from "../../Context/AppContext";
import { collection, doc,addDoc, getDoc, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../../../firebase";

let userIds
let eventID

export default function SendEmail() {  
  const navigation = useNavigation();
  const { recipients, setRecipients } = useContext(AppContext);
  const [isAvailable, setIsAvailable] = useState(false);
  const [subject, setSubject] = useState("QuikDine Event");
  const [body, setBody] = useState(
    "You are invited to my QuikDine Event. Please click on the link to vote."
  );
  const [emailaddress, setEmailaddress] = useState(undefined);

  useEffect(() => {
    async function checkAvailability() {
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    }

    checkAvailability();
  }, []);

  //const sendMail = async () => {
   // const { uri } = await Print.printToFileAsync({
      //html: "<h1>Your file</h1>",
   // });

    //MailComposer.composeAsync({
     // subject: subject,
     // body: "Please click here to vote : http://localhost:3000",
     // recipients: recipients,
     // attachments: [uri],
   // });
 // };

  const sendMail = () => {
// userid from firestore
getDocs(query(collection(db, "Users"),where ('User UID', '==', '2ONojiVSWSbKBbEjvoecpqOJrhP2'))).then(docSnap => {
  let Users = [];
  docSnap.forEach((doc) => {
    Users.push({...doc.data(), id:doc.id})
  });
  console.log("Document Data:", Users);
  
  // if (docSnap.exists()){
  //   console.log("Document Data:", Users);
  // }
  // else{
  //   addDoc(collection(db, "Users"),{
  //     Identifier: emailid,
  //     UserUID: UserUID
  //   })
  // }
  });
                                                                                                                  //eventid from firestore
  sendEmails()
   }



    async function sendEmails() {
      const emaildata = {
        recipients,
        userIds,
        eventID
      };
      const dataResponse = await fetch(
        `http://${serverIP}:5001/api/recepients`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(emaildata),
        }
      );
      const responseValue = await dataResponse.json();
      setSearchResults(responseValue);
    }
    


  const addRecipient = () => {
    let newRecipients = [...recipients];
    newRecipients.push(emailaddress);

    setRecipients(newRecipients);
    setEmailaddress(undefined);
  };

  const removeRecipient = () => {
    setRecipients("");
  };

  const showRecipients = () => {
    if (recipients.length === 0) {
      return <Text>No recipients added</Text>;
    }

    return recipients.map((recipient, index) => {
      return <Text key={index}>{recipient}</Text>;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.backLocation}>
        <Ionicons
          name="arrow-back-circle"
          size={32}
          color="green"
          onPress={() => navigation.navigate("New Event")}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Send Email</Text>
        <Text style={styles.sectionTitle}>to your Friends and Family</Text>
        <TextInput
          placeholder="Subject"
          value={subject}
          onChangeText={setSubject}
          style={styles.input}
        />
        {/* <TextInput
          placeholder="Body"
          value={body}
          onChangeText={setBody}
          style={styles.input}
          // secureTextEntry
        /> */}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmailaddress}
          style={styles.input}
          // secureTextEntry
        />
      </View>
      {/* <TextInput
        value={subject}
        onChangeText={setSubject}
        placeholder="Subject"
      />
      <TextInput value={body} onChangeText={setBody} placeholder="Body" />
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" /> */}
      {/* <TouchableOpacity onPress={addRecipient} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> */}
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={removeRecipient} style={styles.buttonRed}>
          <Text style={styles.buttonText}>Remove Recipient</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addRecipient} style={styles.buttonGreen}>
          <Text style={styles.buttonText}>Add Recipient</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputRecepient}>{showRecipients()}</View>
      {isAvailable ? (
        // <Button style={{ fontSize: 20 }} title="Send Mail" onPress={sendMail} />
        <TouchableOpacity onPress={sendMail} style={styles.buttonSend}>
          <Text style={styles.buttonText}>Send Mail</Text>
        </TouchableOpacity>
      ) : (
        <Text>Email not available</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgreen,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: FontFamily.poppins,
    marginBottom: 15,
  },
  title: {
    fontSize: 44,
    fontFamily: FontFamily.ubuntubold,
  },
  inputContainer: {
    marginTop: "0%",
    marginBottom: "0%",
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  inputRecepient: {
    backgroundColor: "white",
    paddingHorizontal: 65,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  buttonRed: {
    backgroundColor: "#953737",
    width: "45%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    margin: 5,
  },
  buttonGreen: {
    backgroundColor: "#379540",
    width: "45%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    margin: 5,
  },
  buttonSend: {
    backgroundColor: "#379540",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#379540",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#379540",
    fontWeight: "700",
    fontSize: 16,
  },
  backLocation: {
    position: "absolute",
    top: 40,
    left: 15,
  },
});
