export const submitLead = async (
  formData: FormData,
  onSuccess: () => void,
  onError: () => void
) => {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;

  const childAge = formData.get('childAge') as string;
  const grade = formData.get('grade') as string;
  const area = formData.get('area') as string;
  const interaction = formData.get('interaction') as string;

  const description = `Child Age: ${childAge || 'N/A'}\nGrade Seeking Admission: ${grade || 'N/A'}\nArea/Locality: ${area || 'N/A'}\nPreferred Interaction: ${interaction || 'N/A'}`;

  const payload = {
    name,
    phone,
    opportunity: "TSUS Ludhiana LP Lead",
    salesperson_id: 2,
    company_id: 111,
    description
  };

  try {
    const response = await fetch('https://mysamplewebsite.in/api/crm_leads/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      onSuccess();
    } else {
      onError();
    }
  } catch (error) {
    console.error('Error submitting lead:', error);
    onError();
  }
};
