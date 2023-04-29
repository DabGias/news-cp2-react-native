import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // Cards: #3D4E5F
    // Background: #2D3946

    container: {
        display: "flex",
        backgroundColor: '#2D3946',
        alignItems: 'center',
        justifyContent: 'center'
    },

    scrollView: {
        display: "flex", 
        flexDirection: "column", 
        flexWrap: "wrap", 
        alignContent: "center"
    },

    card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#3D4E5F',
        borderRadius: 15,
        width: "90%",
        marginTop: 50,
        marginBottom: 50
    },

    viewCardImg: {
        width: "30%", 
        overflow: "hidden", 
        justifyContent: "center", 
        alignItems: "center", 
        borderTopLeftRadius: 15, 
        borderBottomLeftRadius: 15
    },

    cardImg: {
        resizeMode: "cover",
        width: "100%",
        height: 300
    },

    infoCardTitulo: {
        fontSize: 30, 
        fontWeight: "bold", 
        textAlign: "center",
        marginTop: 15, 
        marginBottom: 15,
        color: "#dddddd"
    },

    infoCardDesc: {
        fontSize: 20, 
        textAlign: "center", 
        marginTop: 15, 
        marginBottom: 15,
        color: "#dddddd"
    },

    infoCardAutor: {
        fontSize: 15, 
        textAlign: "right",
        color: "#dddddd"
    },

    infoCardMain: {
        padding: 15
    },

    infoCardMainText: {
        textAlign: "justify",
        color: "#dddddd"
    },

    form: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#dddddd",
        borderRadius: 15,
        padding: 15
    },

    formInput: {
        width: "80%",
        margin: "auto",
        marginTop: 15,
        marginBottom: 15,
        padding: 15,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: "#2D3946",
        backgroundColor: "white"
    },

    formInputError: {
        width: "80%",
        margin: "auto",
        marginTop: 15,
        marginBottom: 15,
        padding: 15,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: "red",
        backgroundColor: "white"
    },

    formSwitch: {
        display: "flex", 
        width: "80%", 
        justifyContent: "space-between", 
        alignItems: "center", 
        flexDirection: "row"
    },

    formBtn: {
        borderRadius: 15,
        padding: 15,
        width: "80%",
        backgroundColor: "#3D4E5F"
    },

    formBtnDisabled: {
        borderRadius: 15,
        padding: 15,
        width: "80%",
        backgroundColor: "#b1b1b1"
    },

    formBtnText: {
        textAlign: "center",
        color: "#dddddd"
    },

    formBtnTextDisabled: {
        textAlign: "center",
        color: "#717171"
    },

    viewAd: {
        borderRadius: 15, 
        margin: "auto", 
        marginTop: 15, 
        overflow: "hidden", 
        justifyContent: "center", 
        alignItems: "center"
    },

    imgAd: {
        width: "100%", 
        height: 200, 
        resizeMode: "cover"
    }
})
