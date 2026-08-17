# Admin Runbook

Operational reference for provisioning + deploying the BPHS CRM.
Every credential referenced below must be obtained from the account
owner; none are included in this repository.

## New environment provisioning

1. Cloudflare account with Workers Paid plan enabled.
2. Create a D1 database (`bphs-db`) and record the UUID.
3. Create an R2 bucket (`bphs-files`).
4. Enable Cloudflare Email Routing on the primary domain and set
   the catch-all rule to *Send to a Worker* pointing at the
   deployed worker.
5. Provision Resend, Twilio, Stripe, Google OAuth, Microsoft OAuth,
   EagleView, ABC Supply, DocuSign (legacy). Each requires the
   account owner's authorization.
6. Copy `.env.example` → `.env`, fill in every value.
7. `wrangler secret put` for every secret listed in `.env.example`.
8. Apply the D1 schema: `schema.sql` first, then every
   `schema_v*.sql` migration in numeric order.
9. `wrangler deploy`.
10. Configure the custom domain route in Cloudflare DNS + Worker
    routes.

## Rotating credentials

Rotate secrets per each service's guidance. After rotation, push
the new value with `wrangler secret put <NAME>` — the Worker
picks up the change on the next deploy.

## Troubleshooting

Symptom: pages render but every action toasts `API disconnected`.
Cause: one or more of the required environment variables is missing
or invalid. Check `wrangler tail` for the specific missing variable.

Symptom: inbound customer email doesn't land on Engage thread.
Cause: Email Routing catch-all rule is not pointed at the Worker,
OR the domain's MX records are not on Cloudflare. See
`DEPLOYMENT.md` for the subdomain routing pattern.

Symptom: outbound SMS returns 21610.
Cause: The recipient replied STOP at some point. Ask the owner
to clear the block via the Twilio console.

Symptom: Stripe checkout redirects to a Stripe error page.
Cause: `STRIPE_WEBHOOK_SECRET` is stale after a webhook endpoint
rotation. Rotate the secret in the Stripe dashboard and re-push.

// touched by v1.163

// touched by v5.243

<!-- touched by v5.303 -->
