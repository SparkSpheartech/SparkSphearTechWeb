# Netlify Deployment Setup

It looks like Netlify needs permission to access your GitHub repository. The key you provided is a **Deploy Key**.

## Step 1: Add the Deploy Key to GitHub

1.  Go to your GitHub Repository: [https://github.com/SparkSpheartech/SparkSphearTechWeb](https://github.com/SparkSpheartech/SparkSphearTechWeb)
2.  Click on **Settings** (top right tab).
3.  On the left sidebar, click **Deploy keys**.
4.  Click **Add deploy key** (top right button).
5.  Fill in the form:
    *   **Title**: `Netlify Build Key`
    *   **Key**: Paste the key below exactly as is:

```text
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCmXBPN6u3aet72LoDaFp4Z35I3txpzkwNIRx+rITM0nXbKf8D7U3Fo3Uq40NmWGwLGfqvg37VC59qV3z1JsUhnVYZP/evzoIT7UARxbGUMig2xhzGAFzYC91xnwkUbkhzdsxRuPIcHW2ocNBZjnXQeckvdj3ooTjvwjVJHXw0NwunqzBGXb2iiT5hxX4uGJV63iFgNn9Bj80I6Bp2cDNHOgV+Y4VgWbnXPLdjLiIXAgRaNVGoyneWvT0zAcnOVQtpOi83vB9Jt5eEfTK2GYsnrYpwigcSCY2xQDypJLBISr3j+9wyi++wNJ6q7qKs3fqTg4xBDnKmgnJ+dSRMh7llWXTgdSFeCyF3lLnrTPe1BAKOrwwzVI2y7qbXGdY1xUd+KdX52ZZPQ7HccPt1gu1VPYXMXQWjzRuzae91g6lnBW8Y0ALWE5GjO2cYBHkea3KVryv/bUbNKzscjOmxlZYmCsFuPd9Z9ZFeY5zP/xMfyhC+TxaRU2PO4asqetudWArqS75B4WirqwA/AtgxsUCdriitkTLwph184Uf8CnWKMoK2e3l40KI39yz/6qzGxRL3KCBIWoJ0kWloADqJgIWHa908GApl7Bg+pE6f+yqhjFF4unB9KAIg7uW8etuY7K2KT+oPgS9IsUWgbw6p0JQkNVYZ5CRphzO/x1VzIEZr/TQ==
```

6.  **Allow write access**: Leave unchecked (Netlify usually only needs read access to build).
7.  Click **Add key**.

## Step 2: Retry Netlify Build

1.  Go back to your Netlify Dashboard.
2.  Click **Trigger deploy** or **Retry**.
3.  It should now be able to fetch your code and build using the `netlify.toml` configuration I just added.
