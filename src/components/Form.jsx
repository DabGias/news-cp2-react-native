import { useState } from "react"
import { Pressable, Switch, Text, TextInput, View } from "react-native"
import { styles } from "../style/Style"

export function Form() {
    const [isCadastrado, setCadastrado] = useState(false)
    const [receberEmail, setReceberEmail] = useState(false)
    const [form, setForm] = useState({
        nome: "",
        email: ""
    })

    function setNome(texto) {
        setForm({...form, ["nome"]: texto})
    }

    function verifNome() {
        return /^[A-Z][a-z].* [A-Z][a-z]+$/.test(form["nome"].trim())
    }

    function setEmail(texto) {
        setForm({...form, ["email"]: texto})
    }

    function verifEmail() {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form["email"].trim())
    }

    function validar() {
        if (receberEmail) {
            setCadastrado(false)
        } else {
            if (verifNome() && verifEmail()) {
                setCadastrado(true)
            } else {
                setCadastrado(false)
            }
        }
    }

    return(
        <View style={styles.form}>
            <TextInput
                style={
                    form["nome"] !== "" ? 
                        verifNome() ?
                            styles.formInput
                        :
                            styles.formInputError
                    : 
                        styles.formInput
                    }
                placeholder="Nome"
                maxLength={200}
                value={form["nome"]}
                onChangeText={(texto) => {setNome(texto)}}
                onEndEditing={verifNome}
                autoCapitalize="words"
            />
            {
                form["nome"] !== "" ? 
                    verifEmail() ?
                        ""
                    :
                        <Text style={{color: "red"}}>Preencha o campo / Nome inválido</Text>
                : 
                    ""
            }
            
            <TextInput
                style={
                    form["email"] !== "" ? 
                        verifEmail() ?
                            styles.formInput
                        :
                            styles.formInputError
                    : 
                        styles.formInput
                    }
                placeholder="E-mail"
                keyboardType="email-address"
                inputMode="email"
                value={form["email"]}
                onChangeText={(texto) => {setEmail(texto)}}
                onEndEditing={verifEmail}
                autoCapitalize="none"
            />
            {
                form["email"] !== "" ? 
                    verifEmail() ?
                        ""
                    :
                        <Text style={{color: "red"}}>Preencha o campo / Email inválido</Text>
                : 
                    ""
            }

            <View style={styles.formSwitch}>
                <Switch 
                    value={receberEmail} 
                    onValueChange={() => {
                        setReceberEmail(!receberEmail)
                        validar()
                    }}
                    trackColor={{false: '#2D3946', true: '#2D3946'}}
                    thumbColor={receberEmail ? '#FFFFFF' : '#FFFFFF'}
                />

                <Text>Aceito receber notícias nesse e-mail</Text>
            </View>


            <Pressable
                disabled={!isCadastrado}
                style={isCadastrado ? styles.formBtn : styles.formBtnDisabled}
            >
                <Text style={isCadastrado ? styles.formBtnText : styles.formBtnTextDisabled}>Cadastrar</Text>
            </Pressable>
        </View>
    )
}
