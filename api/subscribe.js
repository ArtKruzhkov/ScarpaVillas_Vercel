module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed',
    });
  }

  const { email, language } = req.body;

  if (!email || !language) {
    return res.status(400).json({
      message: 'Email and language are required',
    });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || '',
      },
      body: JSON.stringify({
        email,
        attributes: {
          LANGUAGE: language.toUpperCase(),
        },
        listIds: [2],
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const error = await response.json();

      return res.status(response.status).json({
        message: error.message || 'Brevo request failed',
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error('Brevo subscription error:', error);

    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};
