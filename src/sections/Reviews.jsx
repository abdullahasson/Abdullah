// react
import { useTranslation } from "react-i18next"
// cookies
import cookies from "js-cookie"
// components
import Title from "../components/Title"
import CardContainer from "../Layouts/CardContainer"
import ReviewsCard from "../components/Cards/ReviewsCard"
// img
import { projectsPhoto } from "../assets"



const Reviews = () => {

  const { t } = useTranslation()
  const lng = cookies.get("i18next")

  const reviews = [
    {
      clientPhoto: projectsPhoto.brainwave, 
      clientName: 'Ahmed alsaleh', 
      clientCarrer: 'manager of hubqoute', 
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit temporibus aut obcaecati labore libero, perspiciatis eaque, dolorem, aliquam quis accusamus quia aperiam quos iusto assumenda doloremque vitae dolorum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit temporibus aut obcaecati labore libero, perspiciatis eaque, dolorem, aliquam quis accusamus quia aperiam quos iusto assumenda doloremque vitae dolorum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit temporibus aut obcaecati labore libero, perspiciatis eaque, dolorem, aliquam quis accusamus quia aperiam quos iusto assumenda doloremque vitae dolorum dolor.'
    } ,
    {
      clientPhoto: projectsPhoto.brainwave, 
      clientName: 'Ahmed alsaleh', 
      clientCarrer: 'manager of hubqoute', 
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit temporibus aut obcaecati labore libero, perspiciatis eaque, dolorem, aliquam quis accusamus quia aperiam quos iusto assumenda doloremque vitae dolorum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit temporibus aut obcaecati labore libero, perspiciatis eaque, dolorem, aliquam quis accusamus quia aperiam quos iusto assumenda doloremque vitae dolorum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit temporibus aut obcaecati labore libero, perspiciatis eaque, dolorem, aliquam quis accusamus quia aperiam quos iusto assumenda doloremque vitae dolorum dolor.'
    } ,
    {
      clientPhoto: projectsPhoto.brainwave, 
      clientName: 'Ahmed alsaleh', 
      clientCarrer: 'manager of hubqoute', 
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit temporibus aut obcaecati labore libero, perspiciatis eaque, dolorem, aliquam quis accusamus quia aperiam quos iusto assumenda doloremque vitae dolorum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit temporibus aut obcaecati labore libero, perspiciatis eaque, dolorem, aliquam quis accusamus quia aperiam quos iusto assumenda doloremque vitae dolorum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit temporibus aut obcaecati labore libero, perspiciatis eaque, dolorem, aliquam quis accusamus quia aperiam quos iusto assumenda doloremque vitae dolorum dolor.'
    } ,
    {
      clientPhoto: projectsPhoto.brainwave, 
      clientName: 'Ahmed alsaleh', 
      clientCarrer: 'manager of hubqoute', 
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit temporibus aut obcaecati labore libero, perspiciatis eaque, dolorem, aliquam quis accusamus quia aperiam quos iusto assumenda doloremque vitae dolorum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit temporibus aut obcaecati labore libero, perspiciatis eaque, dolorem, aliquam quis accusamus quia aperiam quos iusto assumenda doloremque vitae dolorum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit temporibus aut obcaecati labore libero, perspiciatis eaque, dolorem, aliquam quis accusamus quia aperiam quos iusto assumenda doloremque vitae dolorum dolor.'
    } ,
  ]

  return (
    <section className="pt-16" id="reviews">
        <Title 
            text={t('reviewsTitle')}
            seconderyText={t('reviewsText')}
        />

        <div className="mt-28">
          <CardContainer
            data={reviews}
            card={ReviewsCard}  
            resourceName='data'
            columnsNumber='1'
          />
        </div>
    </section>
  )
}

export default Reviews
