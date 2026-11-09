import unittest
from check import validate_selected_evidence

class PositiveModuleEvidence(unittest.TestCase):
 def setUp(self):
  self.policy={'retainExistingUnobservedZeroPairLibraries':False,'requirePositiveModuleEvidenceForEverySelectedLibrary':True}
 def test_previous_unobserved_exception_is_rejected(self):
  with self.assertRaises(ValueError):validate_selected_evidence(self.policy,{'lib':{'status':'not-observed','moduleMappedBodyPoints':0}},['lib'],{'lib'})
 def test_status_without_positive_code_is_rejected(self):
  with self.assertRaises(ValueError):validate_selected_evidence(self.policy,{'lib':{'status':'unique-observed','moduleMappedBodyPoints':0}},['lib'],set())
 def test_body_provenance_does_not_require_accepted_pairs_or_initial_anchors(self):
  validate_selected_evidence(self.policy,{'lib':{'status':'unique-observed','moduleMappedBodyPoints':1,'acceptedPairs':0}},['lib'],set())
 def test_duplicate_evidence_remains_disqualifying(self):
  with self.assertRaises(ValueError):validate_selected_evidence(self.policy,{'lib':{'status':'duplicated','moduleMappedBodyPoints':20}},['lib'],set())

if __name__=='__main__':unittest.main()
