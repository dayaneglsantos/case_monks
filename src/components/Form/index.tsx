import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ErrorText,
  Footer,
  FooterContent,
  FooterImages,
  FooterLinks,
  FormBackground,
  FormContainer,
  FormContent,
  FormHeader,
  FormInput,
  FormInputsList,
  SecurityContainer,
  SubmitButton,
} from "./styles";
import formImg from "../../assets/images/form-img.svg";
import instagramLogo from "../../assets/images/instagram.svg";
import xLogo from "../../assets/images/x.svg";
import whatsappLogo from "../../assets/images/whatsapp.svg";
import facebookLogo from "../../assets/images/facebook.svg";

interface FormValues {
  category: string;
  category2: string;
  category3: string;
  category4: string;
  security: number;
}

const Form = () => {
  const [random1, setRandom1] = useState<number>(0);
  const [random2, setRandom2] = useState<number>(0);

  const generateRandom = () => {
    setRandom1(Math.floor(Math.random() * 1000));
    setRandom2(Math.floor(Math.random() * 1000));
  };

  // Esquema de validação do formulário
  const schema = Yup.object({
    category: Yup.string().required("Campo obrigatório"),
    category2: Yup.string().required("Campo obrigatório"),
    category3: Yup.string().required("Campo obrigatório"),
    category4: Yup.string().required("Campo obrigatório"),
    security: Yup.number()
      .required("Campo obrigatório")
      .test(
        "is-sum-correct",
        "Soma dos valores está incorreta",
        function (value) {
          return value === random1 + random2;
        }
      ),
  });

  // Função que fará o POST na API
  const submitForm = (values: FormValues) => {
    console.log("Form submitted:", values);
    form.resetForm();
  };

  const form = useFormik({
    initialValues: {
      category: "",
      category2: "",
      category3: "",
      category4: "",
      security: 0,
    },
    validationSchema: schema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values: FormValues) => {
      submitForm(values);
    },
  });

  useEffect(() => {
    generateRandom();
  }, []);

  return (
    <FormBackground>
      <Footer>
        <FormContent>
          <img src={formImg} alt="Form" />
          <FormContainer onSubmit={form.handleSubmit}>
            <FormHeader>
              <h2>Lorem ipsum dolor sit amet consectetur</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
                faucibus sit scelerisque
              </p>
              <span>*Lorem ipsum dolor sit amet consectetur</span>
            </FormHeader>
            <FormInputsList>
              <div>
                <FormInput
                  placeholder="Categoria 1*"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  name="category"
                  value={form.values.category}
                />
                {form.isSubmitting && form.errors.category4 && (
                  <ErrorText>{form.errors.category4}</ErrorText>
                )}
              </div>
              <div>
                <FormInput
                  placeholder="Categoria 2*"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  name="category2"
                  value={form.values.category2}
                />
                {form.isSubmitting && form.errors.category2 && (
                  <ErrorText>{form.errors.category2}</ErrorText>
                )}
              </div>
              <div>
                <FormInput
                  placeholder="Categoria 3*"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  name="category3"
                  value={form.values.category3}
                />
                {form.isSubmitting && form.errors.category3 && (
                  <ErrorText>{form.errors.category3}</ErrorText>
                )}
              </div>
              <div>
                <FormInput
                  placeholder="Categoria 4*"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  name="category4"
                  value={form.values.category4}
                />
                {form.isSubmitting && form.errors.category4 && (
                  <ErrorText>{form.errors.category4}</ErrorText>
                )}
              </div>
            </FormInputsList>
            <SecurityContainer>
              <span className="security-title">Verificação de segurança</span>
              <div className="security-sum">
                <span className="security-number">{random1}</span>
                <span className="security-signal">+</span>
                <span className="security-number">{random2}</span>
              </div>
              <span className="security-signal">=</span>
              <div>
                <FormInput
                  placeholder="Resultado*"
                  type="number"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  name="security"
                  value={form.values.security === 0 ? "" : form.values.security}
                />
                {form.touched && form.errors.security && (
                  <ErrorText>{form.errors.security}</ErrorText>
                )}
              </div>
            </SecurityContainer>
            <SubmitButton
              type="submit"
              disabled={
                !form.values.category ||
                !form.values.category2 ||
                !form.values.category3 ||
                !form.values.category4 ||
                form.values.security === 0
              }
            >
              Lorem ipsum
            </SubmitButton>
          </FormContainer>
        </FormContent>
        <FooterContent>
          <FooterImages>
            <img src={instagramLogo} alt="Instagram logo" />
            <img src={whatsappLogo} alt="Whatsapp logo" />
            <img src={xLogo} alt="X logo" />
            <img src={facebookLogo} alt="Facebook logo" />
          </FooterImages>
          <p>Lorem ipsum dolor sit amet</p>
          <FooterLinks>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
          </FooterLinks>
        </FooterContent>
      </Footer>
    </FormBackground>
  );
};

export default Form;
