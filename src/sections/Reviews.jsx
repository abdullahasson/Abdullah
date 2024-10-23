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
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, eos deserunt quia deleniti iusto nobis velit doloremque eligendi, magni aut praesentium reprehenderit maxime asperiores? Consectetur repellendus fuga officiis aut molestiae.'
    },
    {
      clientPhoto: projectsPhoto.brainwave, 
      clientName: 'Ahmed alsaleh', 
      clientCarrer: 'manager of hubqoute', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, eos deserunt quia deleniti iusto nobis velit doloremque eligendi, magni aut praesentium reprehenderit maxime asperiores? Consectetur repellendus fuga officiis aut molestiae.'
    },
    {
      clientPhoto: projectsPhoto.brainwave, 
      clientName: 'Ahmed alsaleh', 
      clientCarrer: 'manager of hubqoute', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, eos deserunt quia deleniti iusto nobis velit doloremque eligendi, magni aut praesentium reprehenderit maxime asperiores? Consectetur repellendus fuga officiis aut molestiae.'
    },
    {
      clientPhoto: projectsPhoto.brainwave, 
      clientName: 'Ahmed alsaleh', 
      clientCarrer: 'manager of hubqoute', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, eos deserunt quia deleniti iusto nobis velit doloremque eligendi, magni aut praesentium reprehenderit maxime asperiores? Consectetur repellendus fuga officiis aut molestiae.'
    },
    {
      clientPhoto: projectsPhoto.brainwave, 
      clientName: 'Ahmed alsaleh', 
      clientCarrer: 'manager of hubqoute', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, eos deserunt quia deleniti iusto nobis velit doloremque eligendi, magni aut praesentium reprehenderit maxime asperiores? Consectetur repellendus fuga officiis aut molestiae.'
    },
    {
      clientPhoto: projectsPhoto.brainwave, 
      clientName: 'Ahmed alsaleh', 
      clientCarrer: 'manager of hubqoute', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, eos deserunt quia deleniti iusto nobis velit doloremque eligendi, magni aut praesentium reprehenderit maxime asperiores? Consectetur repellendus fuga officiis aut molestiae.'
    },
    {
      clientPhoto: projectsPhoto.brainwave, 
      clientName: 'Ahmed alsaleh', 
      clientCarrer: 'manager of hubqoute', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, eos deserunt quia deleniti iusto nobis velit doloremque eligendi, magni aut praesentium reprehenderit maxime asperiores? Consectetur repellendus fuga officiis aut molestiae.'
    },
    {
      clientPhoto: projectsPhoto.brainwave, 
      clientName: 'Ahmed alsaleh', 
      clientCarrer: 'manager of hubqoute', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, eos deserunt quia deleniti iusto nobis velit doloremque eligendi, magni aut praesentium reprehenderit maxime asperiores? Consectetur repellendus fuga officiis aut molestiae.'
    },
    {
      clientPhoto: projectsPhoto.brainwave, 
      clientName: 'Ahmed alsaleh', 
      clientCarrer: 'manager of hubqoute', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, eos deserunt quia deleniti iusto nobis velit doloremque eligendi, magni aut praesentium reprehenderit maxime asperiores? Consectetur repellendus fuga officiis aut molestiae.'
    },
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
