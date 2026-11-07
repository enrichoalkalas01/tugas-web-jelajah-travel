@Library('deployment-library@main') _

// Jelajah.id — static HTML/CSS/JS served by nginx (portfolio).
// Deploy: git tag -a v1.0.0 -m "release" && git push origin v1.0.0,
// then run the job with RELEASE_TAG = v1.0.0 and approve.

deploySimple(
    app : 'jelajah-id',
    repo: 'https://github.com/<owner>/jelajah-id.git',
    type: 'fe',
    env : 'prod',
    port: '31160',
    branch: 'main',
    namespace: 'portofolio',
    gates: 'standard',

    // 'fe' assumes Next.js + pnpm; this repo has no package.json, so those
    // steps are skipped. Semgrep, gitleaks, trivy, sbom and smoke test still run.
    enableInstall  : false,
    enableTypecheck: false,
    enableLint     : false,
    enableAudit    : false,
)
