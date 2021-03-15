#### Firebase

firestore
.collection("users")
.doc("a9bXkZhne265UQT6WUTg")
.collection("cartItem")
.doc("KJcKWyhyTfUkbK4eq3yp");

firestore.doc("/users/a9bXkZhne265UQT6WUTg/cartItem/KJcKWyhyTfUkbK4eq3yp");
firestore.collection("/users/a9bXkZhne265UQT6WUTg/cartItem");

### QueryReference and QuerySnapshot:

-   1. Query: A query is a request we make to firestore to give us something from database. Firestore returns us two objects-**reference and snapshots**.Of this this object they can be either Document or Collection version.
       **Note: Firestore always return us object, even if nothing exists at from this quesry.**

-   2. QuerReference: A queryReference object is an object that represent the current place in the database that we are querying.We can call them by folling query
       .2.1. firestore.doc("/users/:userId")
       .2.1. firestore.collections("/users")

The queryReference object does not have the actual data of the collectionor the document. It instead has properties that tell us deatils about it or the method to get the Sanpshot object which will give us the data that we are looking for.

-   3. DocumentReference:
       We use documentRef object to perform crud methods.This methods
       .3.1. .create()=set()
       .3.2. .retrieve()=get()
       .3.3. .update()=update()
       .3.4. .delete()=delete()

We can add documents to collections using collectionRef object using **.add() like collectionRef.add()**

-   documentRef returns a documentSnapshot object
-   collectionRef returns a querySnapshot object