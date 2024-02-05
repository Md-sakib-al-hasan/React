

const Contact = () => {
    
    return (
        <div>
            <p>This is contact page {student.age}</p>
        </div>
    );
};
const getContacts = () =>{
    const student = {
        firstName: "John",
        lastName: "Doe",
        age: 20,
        grade: "A",
        subjects: ["Math", "Science", "English"],
        address: {
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          zip: "12345"
        },
        hobbies: ["Soccer", "Reading", "Painting"]
      };
}
export { getContacts };
export default Contact;