import React from 'react'
import { Text, View, Button, StyleSheet, ScrollView, Alert, FlatList, Dimensions } from 'react-native'
import { Card  } from 'react-native-paper'


const FAQ = ({item}) => {
    return(
        <Card>
        <View style={{padding: 10}} > 
            <Text style={styles.title} >{item.question}</Text>
            <Text  >{item.answer}</Text>
        </View>
        </Card>
    )
}


const freqQuestions = [
    {
      id: "corona",
      question: 'What is Coronavirus?',
      answer:
        'Coronavirus is a large group of viruses that are common among animals. In rare cases, they are what scientists call zoonotic, meaning they can be transmitted from animals to humans, according to the US Centers for Disease Control and Prevention. It is a dangerous diseases with incubation period between 4-6 days.',
    },
    {
      id: "corona-symptoms",
      question: 'What are the symptoms of COVID-19?',
      answer:
        'The viruses can make people sick. Coronavirus symptoms include;fever,a runny nose,cough,sore throat and possibly a headache',
    },
    {
        id: "corona-spread",
      question: 'How does COVID-19 spread?',
      answer:
        'When it comes to human-to-human transmission of the viruses, often it happens when someone comes into contact with the infected persons secretions. The exposure factors are; a cough, sneeze or handshake',
    },
    {
        id: "corona-protection",
      question:
        'What can I do to protect myself & prevent the spread of the disease?',
      answer:
        'Wash your hands with soap and water before touching anything including your eyes, nose and mouth. Cover your mouth and nose when you cough or sneeze. Disinfect the objects and surfaces you touch. If you are sick, stay home and avoid crowds and contact with others.',
    },
    {
        id: "corona-likeliness",
      question: 'How likely am I to catch COVID-19?',
      answer:
        'The virus can also be transmitted by touching something an infected person has touched and then touching your mouth, nose or eyes.',
    },
    {
        id: "advice",
      question: 'What should you do if you think you have COVID-19',
      answer:
        'Call your doctor for advice if you think you’ve been exposed to coronavirus and develop a fever or cough. If you don’t have a primary care physician, call your local board of public health or local hospital. Due to the limited availability of test kits, your doctor will only test you if necessary. If he decides not to test you, he will likely advise you to self-isolate at home until your symptoms are gone.',
    },
    {
        id: "risk",
      question: 'Who is at risk for developing severe illness?',
      answer:
        'While we are still learning about how COVID-19 affects people, older persons and person with pre-existing medical conditions (such as high blood pressure, heart disease,lung disease, cancer and diabetes) appear to develop serious illness more than others',
    },
    {
        id: "drugs",
      question: 'Are antibiotics effective for preventing or treating the COVID-19?',
      answer:
        'No. Antibiotics do not work against viruses, they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19. They should only be used as directed by a physician to treat the bacterial infection',
    },
    {
        id: "vaccine",
      question: 'Is there a vaccine, drug or treatment for COVID-19?',
      answer:
        'There is no specific treatment. Most of the time, symptoms will go away on their own. Doctors can relieve symptoms by prescribing a pain or fever medication.',
    },
  ];






const FAQs = ({navigation}) => {
    return(

        <View style={styles.container}>

        <Text style={{...styles.title,alignSelf: "center" }} >Frequently Asked Questions</Text>
        <FlatList
        data={freqQuestions}
        renderItem={({item}) => 
        <FAQ  item={item}/>
        }
        />

        </View>

        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 25,
        color: "#006211",
         fontWeight: "bold"
    }

})


export default FAQs;