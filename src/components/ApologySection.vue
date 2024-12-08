<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'ApologySection',
  setup() {
    const sectionVisible = ref(false);
    let observer: IntersectionObserver;

    const observeSection = () => {
      const section = document.querySelector('.invitation-section');
      if (section) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                sectionVisible.value = true;
                observer.disconnect();
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(section);
      }
    };

    onMounted(() => {
      observeSection();
    });

    onUnmounted(() => {
      if (observer) observer.disconnect();
    });

    return { sectionVisible };
  },
});
</script>

<template>
  <section class="invitation-section" :class="{ 'section-visible': sectionVisible }">
    <div class="title">

      <img src="../assets//images/logo.jpg" alt="" />

    </div>

    <div class="detail">
      <h4>សេចក្តីសូមអភ័យទោស</h4>
      <br />
      <p>
        យើងខ្ញុំជាមាតា បិតា កូនប្រុសកូនស្រីសូមអភ័យទោសក្នុងករណីដែលយើងខ្ញុំពុំបានជួបអញ្ជើញដោយផ្ទាល់ យើងខ្ញុំសង្ឃឹមថា
        ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា នឹងផ្តល់កិត្តិយស
        អញ្ជើញចូលរួមក្នុងកម្មវិធីអាពាហ៍ពិពាហ៍ដោយក្តីអនុគ្រោះ សូមអរគុណ។
      </p>
      <p class="eng">
        We, as parents and the bride and groom, sincerely extend our apologies for not being able to invite you in
          person.
          We earnestly hope that His Excellency, Lok Oknha, Ladies and Gentlemen, and esteemed guests will graciously
          honor us
          with your presence at the wedding ceremony. Your presence would bring immense joy and blessings to our special
          day.
          Thank you for your kind understanding.
      </p>
    </div>
    <div class="detail">
      <h4>សេចក្តីថ្លែងអំណរគុណ</h4>
      <br />
      <p>
        យើងខ្ញុំជាមាតា បិតា កូនប្រុសកូនស្រីសូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះវត្តមាន ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក
        លោកស្រី អ្នកនាង កញ្ញា ដែលបានផ្តល់កិត្តិយស ដ៏ខ្ពង់ខ្ពស់ និង ឧដុង្គឧត្តមដល់គ្រួសារយើងខ្ញុំ
        សូមគោរពជូនពរជួបតែសេចក្តីសុខ និងជ័យជំនះគ្រប់ភារកិច្ច សូមអរគុណ។
      </p>
      <p class="eng">
        We, as parents and the bride and groom, would like to express our deepest gratitude for the gracious presence
          of His Excellency, Lok Oknha, Ladies and Gentlemen, and all esteemed guests who have honored our family
          with your precious time and presence. Your blessings and kindness mean the world to us.
          We wish you all happiness, prosperity, and success in every endeavor.
          Thank you.
      </p>
    </div>
    <div class="eng-detail">
      <img src="../assets/images/ico_divider3.png" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.invitation-section {
  text-align: center;
  padding: 50px 20px; /* Reduced padding for smaller screens */
  background: url('@/assets/images/bg_invit.png') no-repeat center center;
  background-size: cover;

  &.section-visible {
    opacity: 1;
    transform: translateY(0);
  }

  img {
    width: 100px;
    height: 100px;
    animation: fadeIn 1.5s ease-out;

    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }

  h4 {
    font-size: 18px;
    color: #555;
    margin-bottom: 20px;
    animation: fadeInUp 1.5s ease-out;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  .title {
    display: flex;
    justify-content: center;
    flex-direction: column; /* Stack on smaller screens */
    align-items: center;
    gap: 20px;

    .left-item,
    .right-item {
      animation: slideInLeft 1s ease-out;

      p {
        font-size: 14px;
        color: #555;

        @media (max-width: 768px) {
          font-size: 12px;
        }
      }

      span {
        font-family: 'GeistMono', monospace;
      }
    }

    img {
      animation: scaleIn 1.5s ease-out;
      margin: 10px 0;
    }
  }

  .detail {
    margin-top: 20px;
    animation: fadeInUp 2s ease-out;
    width: 90%; /* Make responsive width */
    max-width: 500px;
    margin: 20px auto;

    p {
      font-size: 14px;
      color: #555;
      line-height: 1.6;

      @media (max-width: 768px) {
        font-size: 12px;
        line-height: 1.4;
      }

      span {
        font-family: 'GeistMono', monospace;
        color: #fac34c;
      }
    }

    .eng {
      font-family: "ItaliannoReg", monospace;
      font-size: 24px;

      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
  }

  .eng-detail {
    width: 90%;
    max-width: 500px;
    margin: 20px auto;
    animation: fadeIn 2s ease-out;

    dl {
      dt {
        font-size: 24px;
        color: #555;
        font-family: "ItaliannoReg", monospace;
        animation: fadeInUp 1.5s ease-out;

        @media (max-width: 768px) {
          font-size: 20px;
        }
      }

      p {
        color: #555;
        font-size: 36px;
        font-family: "ItaliannoReg", monospace;
        margin-bottom: 20px;
        animation: scaleIn 1.5s ease-out;

        @media (max-width: 768px) {
          font-size: 28px;
        }
      }

      .location {
        color: #555;
        font-size: 18px;
        font-family: "ItaliannoReg", monospace;
        animation: fadeInDown 1.5s ease-out;

        @media (max-width: 768px) {
          font-size: 16px;
        }
      }

      img {
        width: 250px;
        height: auto;
        animation: fadeIn 1.5s ease-out;

        @media (max-width: 768px) {
          width: 200px;
        }
      }
    }

    img {
      width: 150px;
      height: auto;
      animation: fadeInUp 1.5s ease-out;

      @media (max-width: 768px) {
        width: 120px;
      }
    }
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
}
</style>
