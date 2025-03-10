import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-home',
  standalone: true,  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]  
})
export class HomeComponent {
  cards = [
    { title: 'Doctors', label: 'Trusted Professionals', image: '../../assets/images/doctor.png'},
    { title: 'Lawyers', label: 'Expert Legal Advice', image: '../../assets/images/Lawyer.png'},
    { title: 'Architects', label: 'Innovative Designs', image: '../../assets/images/architect.png' },
    { title: 'Companies', label: 'Reliable Enterprises', image: '../../assets/images/company_pic.png' },
    { title: 'Accountants', label: 'Financial Experts', image: '../../assets/images/acc_pic.png' },
    { title: 'Consultants', label: 'Strategic Solutions', image: '../../assets/images/cons_pic.png' }
  ];

  // reasons = ['Best Coverage', 'Easy Claims', 'Secure & Reliable'];

  // reasons = [
  //   { title: 'One of the best Prices', subtitle: 'Guaranteed', image: 'assets/images/price.png' },
  //   { title: 'Unbiased Advice', subtitle: 'Keeping customers first', image: 'assets/images/advice.png' },
  //   { title: '100% Reliable', subtitle: 'Regulated by IRDAI', image: 'assets/images/reliable.png' },
  //   { title: 'Claims Support', subtitle: 'Made stress-free', image: 'assets/images/claims.png' },
  //   { title: 'Happy to Help', subtitle: 'Every day of the week', image: 'assets/images/help.png' }
  // ];

  
    reasons = [
      { title: 'One of the best Prices', description: 'Guaranteed', image: '../../assets/images/best-price.png' },
      { title: 'Unbiased Advice', description: 'Keeping customers first', image: '../../assets/images/adv.png' },
      { title: '100% Reliable', description: 'Regulated by IRDAI', image: '../../assets/images/reliability.png' },
      { title: 'Claims Support', description: 'Made stress-free', image: '../../assets/images/support.png' },
      { title: 'Happy to Help', description: 'Every day of the week', image: '../../assets/images/happytohelp.png' }
    ];
  
  

  reviews = [
    'Great service and easy claims process!',
    'Affordable plans and great customer support.',
    'Highly recommended for hassle-free insurance!'
  ];


  
 

  users = [
    { name: 'John Doe', review: 'Professional liability insurance gives me peace of mind, knowing I am covered for errors and omissions.', gender: 'male', profession: 'doctor', image: 'doctor-male.png' },
    { name: 'Jane Smith', review: 'It’s essential for my IT business, protecting my reputation and assuring clients I’m accountable', gender: 'female', profession: 'lawyer', image: 'lawyer-female.png' },
    { name: 'Michael Lee', review: 'As a freelancer, professional liability insurance has been key to growing my business confidently.', gender: 'male', profession: 'architect', image: 'architect-male.png' },
    { name: 'Emily Davis', review: 'Liability insurance lets me focus on patient care without fear of legal issues.', gender: 'female', profession: 'company', image: 'people.png' },
    { name: 'David Brown', review: 'This insurance is a safety net that protects my business and helps me maintain trust with clients.', gender: 'male', profession: 'accountant', image: 'profile.png' },
    { name: 'Sophia Wilson', review: 'Professional liability insurance is an investment that safeguards my reputation and my future.', gender: 'female', profession: 'consultant', image: 'architect-male.png' },
    { name: 'Liam Johnson', review: 'It’s essential for any professional service. It keeps both my clients and my business secure.', gender: 'male', profession: 'doctor', image: 'doctor-male.png' },
    { name: 'Olivia Martinez', review: 'I highly recommend it to anyone in a professional field. It ensures you’re prepared for the unexpected.', gender: 'female', profession: 'lawyer', image: 'lawyer-female.png' },
    { name: 'Ethan White', review: 'Liability insurance lets me focus on patient care without fear of legal issues.', gender: 'male', profession: 'architect', image: 'people.png' }
  ];
  imagePath = 'assets/images/';
  // Adjust the path for your images as needed
  






  // faqs = [
  //   { question: 'How do I claim insurance?', answer: 'You can file a claim online or contact our support team for assistance.' },
  //   { question: 'What plans do you offer?', answer: 'We offer health, vehicle, and property insurance plans tailored to your needs.' }
  // ];


    faqs = [
    {
      question: 'What is this platform about?',
      answer: 'This platform provides users with a seamless experience to explore and compare various insurance quotes, helping them make informed decisions.'
    },
    {
      question: 'How do I get an insurance quote?',
      answer: 'Simply enter your details in the quote form, select the type of insurance you need, and get instant quotes from multiple providers.'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Yes, we follow strict security protocols to ensure that your personal data remains confidential and protected.'
    },
    {
      question: 'Can I compare multiple insurance policies at once?',
      answer: 'Yes, our platform allows you to compare different policies side by side to choose the best option for your needs.'
    },
    {
      question: 'What happens if I enter incorrect details?',
      answer: 'If you realize you have entered incorrect information, you can go back and update your details before finalizing your quote.'
    },
    {
      question: 'Are there any hidden charges?',
      answer: 'No, we provide complete transparency, and there are no hidden fees. You only pay for the insurance policy you choose.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach out to our support team via email, chat, or phone. Our team is available 24/7 to assist you.'
    },
    {
      question: 'Can I cancel my insurance policy?',
      answer: 'The cancellation policy varies based on the insurance provider. Please refer to the terms and conditions of your selected insurer.'
    }
  ];



}
