Lab 1: Create and Configure a Storage Account
Objective: Create a secure and compliant storage account.

Create a Storage Account with the following requirements:

Resource Group: RG-AZ104-Storage
Region: East US (or nearest)
Performance: Standard
Redundancy: LRS


Change the account kind to StorageV2 (general purpose v2).
Disable public network access.
Enable secure transfer required.
Verify the storage account status.

✅ Skills tested: Storage account creation, security settings

Lab 2: Configure Blob Containers and Access Levels
Objective: Manage blob containers and permissions.

Create a Blob container named appdata.
Set the access level to:

Private


Upload a file named config.json.
Change the container access level to Blob (anonymous read access).
Test anonymous access using the blob URL.

✅ Skills tested: Blob containers, access levels

Lab 3: Configure Storage Account Networking
Objective: Control network access to storage.

Restrict storage access to selected networks only.
Add:

Your current public IP address


Enable Allow trusted Microsoft services.
Attempt to access the blob from an unauthorized network and document the result.

✅ Skills tested: Firewalls, network rules

Lab 4: Implement Shared Access Signatures (SAS)
Objective: Secure temporary access using SAS.

Generate a Blob-level SAS token for config.json.
Permissions:

Read only


Expiry:

1 hour


Access the blob using the SAS URL.
Revoke access by regenerating the storage account key.

✅ Skills tested: SAS tokens, security access

Lab 5: Configure Azure File Shares
Objective: Use Azure Files for shared storage.

Create a File Share named sharedfiles.
Set quota to 5 GB.
Upload a test file.
Mount the file share:

On Windows using PowerShell
On Linux using SMB (conceptual if no VM)


Verify read/write access.

✅ Skills tested: Azure Files, SMB, quotas

Lab 6: Configure Storage Redundancy
Objective: Understand and modify redundancy.

Identify current redundancy setting.
Change redundancy from:

LRS → GRS


Verify replication status.
Explain when ZRS vs GRS should be used.

✅ Skills tested: Storage redundancy concepts

Lab 7: Enable Blob Lifecycle Management
Objective: Automate cost optimization.

Create a lifecycle rule:

Move blobs to Cool tier after 30 days
Delete blobs after 180 days


Apply rule to the appdata container only.
Validate rule configuration.

✅ Skills tested: Lifecycle policies, cost management

Lab 8: Configure Soft Delete and Versioning
Objective: Protect data from accidental deletion.

Enable Blob soft delete (7 days).
Enable Blob versioning.
Upload a file and delete it.
Restore the deleted blob.
View previous versions.

✅ Skills tested: Data protection, recovery

Lab 9: Monitor Storage Using Azure Monitor
Objective: Monitor performance and usage.

Enable Storage account metrics.
Create an alert for:

Transactions > 1000 in 5 minutes


View metrics:

Ingress
Egress
Transactions


Export logs to a Log Analytics workspace.

✅ Skills tested: Monitoring, alerts, diagnostics

Lab 10: Storage Account Access Control (RBAC)
Objective: Secure access using Azure RBAC.

Assign a user the role:

Storage Blob Data Reader


Verify user can read blobs but cannot upload.
Remove the role assignment.
Test access again.

✅ Skills tested: RBAC, identity access

