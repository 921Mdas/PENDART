import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Pressable,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import FormNotif from "./FormNotif";
import { COLORS } from "../constants/theme";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

// icons
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { recordPurchase } from "../util/http";
import { validate, defaultValues } from "../util/YupValidation";
import { ContactHeader } from "./ContactFormHeader";

// to create custom components

const ContactForm = () => {
  const Route = useRoute();
  const navigation = useNavigation();

  const total = Route?.params?.total ? Route?.params?.total : 0;

  const handleFieldError = (errors, touched, prop) => {
    return errors[prop] ? "red" : touched[prop] ? "green" : COLORS.gray;
  };

  return (
    <ScrollView style={styles.full}>
      <KeyboardAvoidingView behavior="position" style={styles.full}>
        <View style={styles.container}>
          <ContactHeader total={total} />
          <View style={styles.full}>
            <Formik
              initialValues={defaultValues}
              onSubmit={(values, { resetForm }) => {
                Alert.alert("Payment confirmation", "Payment successful ✅", [
                  {
                    text: "Continue Bidding",
                    onPress: () => {
                      values["total"] = total;
                      recordPurchase(values);
                      navigation.goBack();
                    },
                  },
                  {
                    text: "cancel",
                    onPress: () => {},
                  },
                ]);
                resetForm();
              }}
              validationSchema={validate}
            >
              {({
                handleSubmit,
                handleBlur,
                handleChange,
                touched,
                errors,
                values,
              }) => (
                <View>
                  <View style={styles.formCtrl}>
                    <TextInput
                      style={[
                        styles.field,
                        {
                          borderColor: handleFieldError(
                            errors,
                            touched,
                            "card"
                          ),
                          borderRadius: 3,
                        },
                      ]}
                      onChangeText={handleChange("card")}
                      onBlur={handleBlur("card")}
                      placeholder="122-323-434-121"
                      placeholderTextColor={COLORS.gray}
                      value={values.card}
                      name="card"
                      id="card"
                    />
                    {errors.card && touched.card && (
                      <FormNotif
                        color={errors.card && "red"}
                        name={errors.card ? "error" : "check-circle"}
                        message={errors.card}
                      />
                    )}
                  </View>
                  <View style={styles.dates}>
                    <View style={[styles.formCtrl, styles.datefield]}>
                      <TextInput
                        style={[
                          styles.field,
                          {
                            borderColor: handleFieldError(
                              errors,
                              touched,
                              "month"
                            ),
                            borderTopLeftRadius: 3,
                            borderBottomLeftRadius: 3,
                            marginRight: 5,
                          },
                        ]}
                        onChangeText={handleChange("month")}
                        onBlur={handleBlur("month")}
                        placeholder="month"
                        placeholderTextColor={COLORS.gray}
                        value={values.month}
                        name="month"
                        id="month"
                      />
                      {errors.month && touched.month && (
                        <FormNotif
                          color={errors.month && "red"}
                          name={errors.month ? "error" : "check-circle"}
                          message={errors.month}
                        />
                      )}
                    </View>
                    <View style={[styles.formCtrl, styles.datefield]}>
                      <TextInput
                        style={[
                          styles.field,
                          {
                            borderColor: handleFieldError(
                              errors,
                              touched,
                              "year"
                            ),
                            borderTopRightRadius: 3,
                            borderBottomRightRadius: 3,
                          },
                        ]}
                        onChangeText={handleChange("year")}
                        onBlur={handleBlur("year")}
                        placeholder="2022"
                        placeholderTextColor={COLORS.gray}
                        value={values.year}
                        name="year"
                        id="year"
                      />
                      {errors.year && touched.year && (
                        <FormNotif
                          color={errors.year && "red"}
                          name={errors.year ? "error" : "check-circle"}
                          message={errors.year}
                        />
                      )}
                    </View>
                  </View>
                  <View style={styles.formCtrl}>
                    <TextInput
                      style={[
                        styles.field,
                        {
                          borderColor: handleFieldError(errors, touched, "cvv"),
                          borderRadius: 3,
                        },
                      ]}
                      onChangeText={handleChange("cvv")}
                      onBlur={handleBlur("cvv")}
                      placeholder="cvv"
                      placeholderTextColor={COLORS.gray}
                      value={values.cvv}
                      name="cvv"
                      id="cvv"
                    />
                    {errors.cvv && touched.cvv && (
                      <FormNotif
                        color={errors.cvv && "red"}
                        name={errors.cvv ? "error" : "check-circle"}
                        message={errors.cvv}
                      />
                    )}
                  </View>
                  <View style={styles.dates}>
                    <View style={[styles.formCtrl, styles.datefield]}>
                      <TextInput
                        style={[
                          styles.field,
                          {
                            borderColor: handleFieldError(
                              errors,
                              touched,
                              "country"
                            ),
                            borderTopLeftRadius: 3,
                            borderBottomLeftRadius: 3,
                            marginRight: 5,
                          },
                        ]}
                        onChangeText={handleChange("country")}
                        onBlur={handleBlur("country")}
                        placeholder="country"
                        placeholderTextColor={COLORS.gray}
                        value={values.country}
                        name="country"
                        id="country"
                      />
                      {errors.country && touched.country && (
                        <FormNotif
                          color={errors.country && "red"}
                          name={errors.country ? "error" : "check-circle"}
                          message={errors.country}
                        />
                      )}
                    </View>
                    <View style={[styles.formCtrl, styles.datefield]}>
                      <TextInput
                        style={[
                          styles.field,
                          {
                            borderColor: handleFieldError(
                              errors,
                              touched,
                              "postal"
                            ),
                            borderTopRightRadius: 3,
                            borderBottomRightRadius: 3,
                          },
                        ]}
                        onChangeText={handleChange("postal")}
                        onBlur={handleBlur("postal")}
                        placeholder="postal"
                        placeholderTextColor={COLORS.gray}
                        value={values.postal}
                        name="postal"
                        id="postal"
                      />
                      {errors.postal && touched.postal && (
                        <FormNotif
                          color={errors.postal && "red"}
                          name={errors.postal ? "error" : "check-circle"}
                          message={errors.postal}
                        />
                      )}
                    </View>
                  </View>

                  <View style={styles.actions}>
                    <Pressable
                      onPress={() => navigation.goBack()}
                      style={[styles.cancelBtn]}
                    >
                      <Text style={styles.PayMessage}>Cancel</Text>
                    </Pressable>
                    <Pressable
                      onPress={handleSubmit}
                      style={[styles.paymentBtn, styles.shade]}
                    >
                      <Text style={styles.PayMessage}>{`Pay ${
                        total ? total : "Here"
                      }`}</Text>
                    </Pressable>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  actions: {
    flexDirection: "row",
  },
  shade: {
    shadowColor: COLORS.gray,
    elevation: 10,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
  },
  paymentBtn: {
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: COLORS.gold,
    flex: 1,
  },
  cancelBtn: {
    paddingVertical: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: COLORS.gray,
    flex: 1,
    marginRight: 10,
  },
  PayMessage: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.gray,
  },
  header: {
    marginBottom: 40,
  },
  logos: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.gray,
  },
  checkoutAmount: {
    fontSize: 30,
    marginTop: 10,
    color: COLORS.gray,
  },
  container: {
    marginTop: 20,
    flex: 1,
  },
  allSmooth: {
    borderRadius: 3,
  },
  formCtrl: {
    marginBottom: 20,
  },
  field: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  dates: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datefield: {
    flex: 1,
  },
  icons: {
    marginRight: 5,
  },
});
